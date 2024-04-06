import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {

    return (
        <Link to={`/post/${$id}`} className='block w-full'>
    <div className='w-full bg-gray-100 rounded-xl p-4 hover:scale-105 duration-500'>
        <div className='w-full mb-4 overflow-hidden rounded-xl' style={{ height: '150px' }}>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-full object-cover rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
    </div>
</Link>
    )
}

export default PostCard