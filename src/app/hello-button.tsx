"use client"

import { useEffect, useState } from 'react';

import axios from 'axios';

import { Button } from '@/components/ui/button';

export default function HelloButton() {
    const [helloMessage, setHelloMessage] = useState<string>('');

    const fetchHelloMessage = async () => {
        const response = await axios.get(process.env.BACKEND_URL!);
        console.log(response.data);
        setHelloMessage(response.data);
    }

    return (
        <div>
        <p>{helloMessage}</p>
        <Button onClick={fetchHelloMessage}>
            Bonjour
        </Button>
        </div>
    )
}