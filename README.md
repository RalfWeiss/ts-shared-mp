[![Build Status](https://travis-ci.com/RalfWeiss/ts-shared-mp.svg?branch=master)](https://travis-ci.com/RalfWeiss/ts-shared-mp)

# Typescript Multirepo Demo

## Project Structure

**root**
  apps - clients ex. create-react-app
  libs - shared parts ex. React components

## Initial Steps

In the initial steps this repo shows the usage of the following toolset:

- lerna
- yarn
- create-react-app typescript
- react-admin
- Mockend + json

## Add `mockend`

- install [mockend](https://github.com/apps/mockend) in Github repo
- add file `.mockend.json` in repo root
- add proxy: http-proxy-middleware



## Add a lib

Adding a lib ex. `admin` which encapsulate a `react-admin` component.
