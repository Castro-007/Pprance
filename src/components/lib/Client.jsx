import React from 'react'
import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'sptzz1hf',
    dataset: 'production',
    apiVersion:"2025-11-24",
    useCdn: true,
})


