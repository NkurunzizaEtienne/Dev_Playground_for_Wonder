import { redirect, } from "react-router-dom"

const base_url = 'http://localhost:8000/devices/'

export const productsLoader = async()=>{
    try {
        const resp = await fetch(base_url)
        if(!resp.ok){
            throw new Response('fetch did not work', {status:resp.status})
        }
        return resp.json()
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export const productLoader = async ({params})=>{
    
    try {
        const resp = await fetch(`${base_url}${params.id}`)
        if(!resp.ok){
            throw new Response('could not fetch the data', {status:resp.status})
        }
        return resp.json()
    } catch (error) {
        console.error(error)
        throw error;
    }
}
export const productAction = async ({request, params})=>{
    const formData = await request.formData()
    const intent = formData.get('intent')
    const data = Object.fromEntries(formData)
    if(intent ==='delete'){
        try {
        const resp = await fetch(`${base_url}${params.id}`, {
            method:"DELETE"
        })
        if(!resp.ok){
            throw new Response('could not fetch the data', {status:resp.status})
        }
        return redirect('/products')
    } catch (error) {
        console.error(error)
        throw error;
    }
    }

    if(intent === 'update'){
        delete data.intent
        data.price = Number(data.price)
        try {
        const resp = await fetch(`${base_url}${params.id}`, {
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if(!resp.ok){
            throw new Response('could not fetch the data', {status:resp.status})
        }
        return redirect ('/products')
    } catch (error) {
        console.error(error)
        throw error;
    }
    }
}

export const productPostAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    try {
        const resp = await fetch(base_url, {   // <-- no params.id, POST to collection
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (!resp.ok) {
            throw new Response('could not post the data', { status: resp.status })
        }
        return redirect('/products')
    } catch (error) {
        console.error(error)
        throw error;
    }
}