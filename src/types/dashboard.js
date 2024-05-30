import { gql } from 'apollo-boost';

export const FILTER_DASHBOARD = gql`query getDashboards($filters:dashboardInput ){
  filterDashboards(data: $filters){
    id
    name
    description
  }
}`


