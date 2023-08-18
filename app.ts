interface User {
    name: string,
    age: number
}

interface Admin {
    name: string,
    role: string
}

function isAdmin(obj: User | Admin): obj is Admin {
    return 'role' in obj
}

function isAdminAlternative(obj: User | Admin): obj is Admin {
    return (obj as Admin).role !== undefined
}

function setRoleZero(x: any) {
    if (isAdmin(x)) {
        x.role = '0'
    } else {
        throw new Error('Not found')
    }
}