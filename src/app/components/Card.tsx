import Image from 'next/image'

interface CardProps {
  title: string
  imageUrl: string
}

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-amber-300 bg-stone-100 p-4">
      <h1 className="text-lg font-medium">{props.title.toUpperCase()}</h1>
      <Image
        width="100"
        height="100"
        style={{ height: 'auto' }}
        src={props.imageUrl}
        alt="Card Image"
        priority
      />
    </div>
  )
}
