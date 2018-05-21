import pandas as pd
import numpy as np
import math

Ratings=pd.read_csv("./data/ratings.csv")
Movies=pd.read_csv("./data/movies.csv")
Tags=pd.read_csv("./data/tags.csv")

Mean= Ratings.groupby(['movieId'], as_index = False, sort = False).mean().rename(columns = {'rating': 'rating_mean'})[['movieId','rating_mean']]
Ratings = pd.merge(Ratings,Mean,on = 'movieId', how = 'left', sort = False)
Ratings['rating_adjusted']=Ratings['rating']-Ratings['rating_mean']


movie_data_all_append=pd.DataFrame()
user_data= Ratings[Ratings['userId']!=320]
distinct_movies=np.unique(user_data['movieId'])
i=1
for movie in distinct_movies:
 
    if i%10==0:
        print(i , 'out of ', len(distinct_movies))
        movie_data_all=pd.DataFrame()
        movie_data = Ratings[Ratings['movieId']==movie]
        movie_data = movie_data[['userId','movieId','rating_adjusted']].drop_duplicates()
        movie_data=movie_data.rename(columns={'rating_adjusted':'rating_adjusted1'})
        movie_data=movie_data.rename(columns={'movieId':'movieId1'})
        movie1_val=np.sqrt(np.sum(np.square(movie_data['rating_adjusted1']), axis=0))
        
        user_data1= Ratings[Ratings['userId']==320]
        distinct_movies1=np.unique(user_data1['movieId'])

for movie1 in distinct_movies1:
    movie_data1 = Ratings[Ratings['movieId']==movie1]
    movie_data1 = movie_data1[['userId','movieId','rating_adjusted']].drop_duplicates()
    movie_data1=movie_data1.rename(columns={'rating_adjusted':'rating_adjusted2'})
    movie_data1=movie_data1.rename(columns={'movieId':'movieId2'})
    movie2_val=np.sqrt(np.sum(np.square(movie_data1['rating_adjusted2']), axis=0))
    
    movie_data_merge = pd.merge(movie_data,movie_data1[['userId','movieId2','rating_adjusted2']],on = 'userId', how = 'inner', sort = False)
    
    movie_data_merge['vector_product']=(movie_data_merge['rating_adjusted1']*movie_data_merge['rating_adjusted2'])
    movie_data_merge= movie_data_merge.groupby(['movieId1','movieId2'], as_index = False, sort = False).sum()
    movie_data_merge['dot']=movie_data_merge['vector_product']/(movie1_val*movie2_val)
    
    movie_data_all = movie_data_all.append(movie_data_merge, ignore_index=True)
    
    
    movie_data_all= movie_data_all[movie_data_all['dot']<1]
    movie_data_all = movie_data_all.sort(['dot'], ascending=False)
    movie_data_all = movie_data_all.head(20)
    
    movie_data_all_append = movie_data_all_append.append(movie_data_all, ignore_index=True)
    i=i+1


movie_rating_all=pd.DataFrame()
for movie in distinct_movies[313:314]:
    movie_nbr=movie_data_all_append[movie_data_all_append['movieId1']==movie]
    movie_mean = Ratings[Ratings['movieId']==movie]
    mean = movie_mean[“rating”].mean()
    movie_nbr_dot = pd.merge(user_data1,movie_nbr[['dot','movieId2','movieId1']], how = 'inner',left_on='movieId', right_on='movieId2', sort = False)
    movie_nbr_dot['wt_rating']=movie_nbr_dot['dot']*movie_nbr_dot['rating_adjusted']
    movie_nbr_dot['dot_abs']=movie_nbr_dot['dot'].abs()
    movie_nbr_dot= movie_nbr_dot.groupby(['movieId1'], as_index = False, sort = False).sum()[['movieId1','wt_rating','dot_abs']]
    movie_nbr_dot['Rating']=(movie_nbr_dot['wt_rating']/movie_nbr_dot['dot_abs'])+mean
    
    movie_rating_all = movie_rating_all.append(movie_nbr_dot, ignore_index=True)
 
movie_rating_all = movie_rating_all.sort(['Rating'], ascending=False)
