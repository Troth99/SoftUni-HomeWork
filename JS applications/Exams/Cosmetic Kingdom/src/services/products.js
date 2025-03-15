import { createProductsUrl, productsUrl } from "../constants/index.js"
import { getToken, getUserId } from "../utis.js"
import page from "../../node_modules/page/page.mjs"

export async function getProducts(ctx, next) {

    try {
        const response = await fetch(productsUrl)
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        ctx.products = data
        next()

    } catch (error) {
        alert(error.message)
    }
}

export async function getProduct(ctx, next) {
    const productId = ctx.params.id
    try {
        const response = await fetch(`http://localhost:3030/data/products/${productId}`)
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
        ctx.product = data
        next()

    } catch (error) {
        alert(error.message)
    }
}

export async function getBuyCount(ctx, next) {
    const productId = ctx.params.id
    
    try {
        const response = await fetch(`http://localhost:3030/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`)
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
      
        ctx.getBuyCount = data
        next()

    } catch (error) {
        alert(error.message)
    }
}

export async function isBoughtUser(ctx, next) {
    const productId = ctx.params.id
    const userId = getUserId()
   
    try {
        const response = await fetch(`http://localhost:3030/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

        ctx.isBoughtUser = data !== 0
        next()

    } catch (error) {
        alert(error.message)
    }
}



export async function handleCreateProduct(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl')
    const category = formData.get("category")
    const description = formData.get('description')
    const price = formData.get('price')

    if (!name || !imageUrl || !category || !description || !price) {
        return alert('All fields are required')
    }

    const body = {
        name,
        imageUrl,
        category,
        description,
        price
    }
    createProduct(body)
}

export async function handleEditProduct(e, productId) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl')
    const category = formData.get("category")
    const description = formData.get('description')
    const price = formData.get('price')

    if (!name || !imageUrl || !category || !description || !price) {
        return alert('All fields are required')
    }

    const body = {
        name,
        imageUrl,
        category,
        description,
        price
    }
    editProduct(body, productId)
}

async function createProduct(body) {

    try {
        const response = await fetch(createProductsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

        page.redirect("/products")
    } catch (error) {
        alert(error.message)
    }

}

async function editProduct(body, productId) {
   
 
    try {
        const response = await fetch(`http://localhost:3030/data/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()

        page.redirect(`/products/${productId}`)
    } catch (error) {
        alert(error.message)
    }

}


export async function  onDelete(e, id){
    e.preventDefault()

    try {
  
        confirm('Are you sure you want to delete this item?')
        const response = await fetch(`http://localhost:3030/data/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
        })
  
        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        page.redirect("/products")
    } catch (error) {
        alert(error.message)
    }
  }

  export function handleBuy(e, productId){
    e.preventDefault()

    
    const body = {
      productId,
    }
    buy(body, productId)
  }

 async function buy(body, productId){
    try {
        const response = await fetch(`http://localhost:3030/data/bought`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(body)
        })
      

        if (!response.ok) {
            let error = await response.json()
            throw new Error(error.message)
        }
        const data = await response.json()
     

        page.redirect(`/products/${productId}`)
    } catch (error) {
        alert(error.message)
    }
  }