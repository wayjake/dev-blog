interface CoverImageProps {
    src: string
}


export const CoverImage = ({ src }: CoverImageProps) => {
    if (src){
    return (
                <img src={src} style={{display: "block", width: "100%", height: "30vh", objectFit: "cover", objectPosition: "center 34.27%" }} /> 
    )    
} else return null
}