import * as React from "react";
import { Admin as RaAdmin, Resource, ListGuesser, EditGuesser, DataProvider } from 'react-admin';
import { UserList } from './users'
import { PostList, PostCreate, PostEdit } from './posts'

export type AdminProps = {
  dataProvider: DataProvider;
}

// change ListGuesser with UserLsit
/*
export const Admin = ({dataProvider}: AdminProps) => 
  <RaAdmin dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </RaAdmin>
*/

export const Admin = ({dataProvider}: AdminProps) => 
  <RaAdmin dataProvider={dataProvider} >
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </RaAdmin>
