import Image from "next/image";

export default function ImageComponent() {
    return (
        <Image
            src="https://placehold.co/300x200"
            alt="Placeholder"
            width={300}
            height={200}
        />
    );
}