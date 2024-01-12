import { Button } from '@/components/ui/button';

const fetchHelloMessage = async () => {
  const response = await fetch('http://192.168.1.65:80/');
  return (await response.text())
}

import HelloButton from './hello-button';

export default async function Home() {
  return (
    <main>
      <h1>Architecture Linux</h1>
      <HelloButton />
    </main>
  )
}
