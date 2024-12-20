import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    setUser(data.user);
                } else {
                    alert(data.message || "Failed to fetch user data.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <div>
             <h1>Welcome, {user.username}</h1>
            <p>Company Name: {user.companyname}</p>
            <p>Email: {user.email}</p>
           
        </div>
    );
};

export default Dashboard;
