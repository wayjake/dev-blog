import {BlogPostProps} from "../../types/props/componentProps"; 
import { CoverImage } from "../blocks/CoverImage";
import {Tag, Text } from "../blocks"; 


export function BlogPostHeader ({page, users, blocks}: BlogPostProps){


    return (
        <div>
            <CoverImage src = {page.cover ? page.cover.external.url : "" }/>
            <h1>
                <Text text={page.properties.Name?.title[0]?.text?.content}/>
            </h1> 
            <p>{"by " + users[(page.created_by.id as unknown as number)]}</p>
            <p>{page?.properties?.Tags?.multi_select[0] ?"Tags: ": ""}<Tag values={page?.properties?.Tags?.multi_select ? page.properties.Tags.multi_select : null}/></p>
        </div>
    )

}