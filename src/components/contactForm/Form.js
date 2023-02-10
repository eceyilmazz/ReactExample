import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";



function Form() {

    const [forms, setforms] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3001/forms")
          .then((res) => setforms(res.data))
          .catch((e) => console.log(e))
      }, []);

    return(
        <div className="w-full border rounded p9">
            {/* <h2>Form Verileri</h2> */}

            {/* <table>
                <tr> 
                    <td>Ad</td>
                    <td>Soyad</td>
                </tr>
            </table> */}

<table className="w-full" >

        <thead>
            <tr>
                <th className="text-left text-sm font-semibold text-gray-800 p-3 border-b">Ad</th>
                <th className="text-left text-sm font-semibold text-gray-800 p-3 border-b">E-mail</th>
                <th className="text-left text-sm font-semibold text-gray-800 p-3 border-b">Telefon</th>
                <th className="text-left text-sm font-semibold text-gray-800 p-3 border-b">Mesaj</th>
            </tr>
        </thead>
           

            {
                forms.map((data) => (
                 
                        <tbody key={data.id}>
                            <tr className="group">
                                <td className="p-3 text-sm group-hover:bg-gray-100">{data.name}</td>
                                <td className="p-3 text-sm group-hover:bg-gray-100">{data.email}</td>
                                <td className="p-3 text-sm group-hover:bg-gray-100">{data.phone}</td>
                                <td className="p-3 text-sm group-hover:bg-gray-100">{data.message}</td>
                                
                            </tr>
                        </tbody>
                        
                  

                ))
                
            }
        </table>

        


{/* 
        {
            forms.map((data) => (
                
                <tbody key={data.id}>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.message}</td>
                        
                    </tr>
                </tbody>
                    
                

            ))
                
            } */}


        </div>
        
    );

}

export default Form;