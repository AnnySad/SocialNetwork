

export const updateObjectInArray = (items: Array<any>, itemId: any, objPropertyName: any, newObjProps: any) => {
   return  items.map(u => {
            if (u[objPropertyName] === itemId) {
                return {...u, ...newObjProps}
            }
            return u
        }
    )
}