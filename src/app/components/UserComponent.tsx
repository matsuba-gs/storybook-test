import { useEffect, useState } from "react";

export default function UserComponent() {
    const [user, setUser] = useState<{ firstName: string; lastName: string; age: number } | null>(null);

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}