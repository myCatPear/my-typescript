class User {
  constructor(id: number, name: string) {}
}


function getData(id:number): User {
  return new User(id, 'Denis')
}

type RT = ReturnType<typeof getData>

type PT = Parameters<typeof getData>

type CP = ConstructorParameters<typeof User>