type Filter = {
    id: number,
    completed?: string,
    label: string
}

export const filters: Record<number, Filter> = {
    1: {
        id: 1,
        label: 'All'
    },
    2: {
        id: 2,
        completed: '1',
        label: 'Fulfilled'
    },
    3: {
        id: 3,
        completed: '0',
        label: 'Unfulfilled'
    }
}


export const filterList = Object.values(filters)

export const getFilterById = (id: number) => filters[id]
