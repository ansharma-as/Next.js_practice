import axios from "axios";

export default async function page() {

      await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
      })
        const response = axios.get("http://localhost:3000/api/user");
 

    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {response.data?.name}
                </div>
                
                {response.data?.email}
            </div>
        </div>
    </div>
}