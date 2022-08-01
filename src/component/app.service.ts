const axios = require('axios');

export class AppService {


    public async getUsers(): Promise<any> {
        const response = await axios.get('http://localhost:3001/students');
        return response.data;
    }

    public async getsingleUser(id: number): Promise<any> {
        const response = await axios.get('http://localhost:3001/students/' + id);
        return response.data;
    }

}
