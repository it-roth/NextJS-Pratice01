import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";

// export default function BlogComponent(props:blogType){
//     return(
//         <>
//             <Image 
//             src={props.profile} 
//             alt="" 
//             width={150}
//             height={150}
//             loading="eager"
//             />
//             <hr />
//             <h1>Name : {props?.name}</h1>
//             <h2>Posistion: {props?.posisition}</h2>
//         </>
//     );
// }
export default function BlogComponent({ profile, name, posisition }: blogType) {
    return (
        <div className="rounded-base border border-default bg-neutral-secondary-soft p-6 flex flex-col items-center text-center gap-3">
            <Image
                src={profile}
                alt={name}
                width={96}
                height={96}
                loading="eager"
                className="rounded-full object-cover"
            />

            <hr className="w-full border-default opacity-50" />

            <h1 className="text-heading font-semibold">Name: {name}</h1>
            <h2 className="text-body">Position: {posisition}</h2>
        </div>
    );
}