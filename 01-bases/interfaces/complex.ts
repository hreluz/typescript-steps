(() => {

    interface Client {
        name: string;
        age?: number;
        address :Address;
        getFullAddress(id: string): void;
    }

    interface Address {
        id: number;
        zip: string;
        city: string
    }

    const client:Client = {
        name: 'Hector',
        // age: 25
        address: {
            id: 4,
            zip: '84453',
            city: 'Seattle'
            
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    console.log(client.getFullAddress(''))

    

})()