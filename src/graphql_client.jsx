import React, { useEffect } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client'

const client = new ApolloClient({
    url: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache()
})

const GraphQLClient = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                <GraphQLContent />
            </div>
        </ApolloProvider>
    )
}


const GraphQLContent = () => {
    const query = gql`
        query GetLaunchesPast {
            launchesPast(limit: 10) {
                id
                mission_name
            }
        }
    `

    useEffect(() => {
        xxx()
    }, [])

    const xxx = async () => {
        client
            .query({
                query: gql`
        query GetLaunchesPast {
            launchesPast(limit: 10) {
                id
                mission_name
            }
        }
    `
            })
            .then(result => console.log(result));
    }

    const { data, loading, error } = useQuery(query)

    if (loading) { return 'Loading...' }
    if (error) { return error.clientErrors.toString() }

    return (
        <div>
            <ul>
                {data.launchesPast.map(data => <li>{data.mission_name}</li>)}
            </ul>
        </div>
    )
}

export default GraphQLClient