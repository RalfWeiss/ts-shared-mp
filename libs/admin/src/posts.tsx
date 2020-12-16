import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
 } from 'react-admin';


export const PostList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
          <TextField source="name" />
      </ReferenceField>      
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

const PostTitle =({record}) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export const PostEdit = props => (
  <Edit title={<PostTitle record={props.record} />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
        <ReferenceInput source="userId" reference="users">
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);