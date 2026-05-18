import BlogComponent from "@/components/BlogComponent";
import { blogType } from "@/lib/blog/blog-type";

export default function BlogPage(){
    //rendering many passby props
    const blogs:blogType[]=[
        {profile: "https://i1-e.pinimg.com/736x/0e/ee/9b/0eee9bfaf9217cacbc7aa387b6f07bb9.jpg",name:"Caty Caty", posisition:"Meow Server"},
        {profile: "https://i1-e.pinimg.com/736x/0e/ee/9b/0eee9bfaf9217cacbc7aa387b6f07bb9.jpg",name:"Caty Caty1", posisition:"Meow Server"},
        {profile: "https://i1-e.pinimg.com/736x/0e/ee/9b/0eee9bfaf9217cacbc7aa387b6f07bb9.jpg",name:"Caty Caty2", posisition:"Meow Server"},
        {profile: "https://i1-e.pinimg.com/736x/0e/ee/9b/0eee9bfaf9217cacbc7aa387b6f07bb9.jpg",name:"Caty Caty3", posisition:"Meow Server"},
    ]
    return(
        // <div>
        //     <BlogComponent
        //     profile={"https://i1-e.pinimg.com/736x/0e/ee/9b/0eee9bfaf9217cacbc7aa387b6f07bb9.jpg"}
        //     name={'Caty Caty'}
        //     posisition={"Meow Saver"}/>
        // </div>
        <div className="container mx-auto pt-20 grid grid-cols-4 gap-4 p-8">
            {
                blogs?.map(({profile, name, posisition},_)=>(
                    <BlogComponent
                    key={_}
                    profile={profile}
                    name={name}
                    posisition={posisition}
                    />
                ))
            }
        </div>
    );
}