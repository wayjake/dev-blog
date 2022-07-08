export interface BookmarkProp {
    value: {
        url?: string; 
    }
}

export interface CodeProp {
    text?: string; 
    id: string; 
}

export interface FileProp{
    value: {
        external: { url: string };
        file: { url: string };
        type: string;
        caption?: any;
      }
}

export interface ImageProp {
    imgUrl: string;
    imgCaption: string;
  }

export interface ListProp {
    type: string;
    text: string;
}

export interface TextProp {
    text?: string; 
    url?: string; 
}

export interface ToDoProp {
    text: string;
    checked: boolean;
    id: string;
}
export interface ToggleProp {
    text?: string;
    toggleContent?: string;  
  }