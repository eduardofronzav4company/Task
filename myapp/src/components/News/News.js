import Button from '../Button/Button';
import { ContainerNews, ItemNews, ContainerTitleNews, StyledIcon, TextTitle, ContainerDescription } from './style';
import { IoNewspaperOutline } from 'react-icons/io5';
import { GiWorld } from 'react-icons/gi';
import { HiOutlineBookOpen } from 'react-icons/hi';

let ListItemNews = [
    {
        icon: <IoNewspaperOutline />,
        title: "Ultimas noticias",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget volutpat lectus.",
        textButton: "go to the blog",
    },
    {
        icon: <GiWorld />,
        title: "Franquia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget volutpat lectus.",
        textButton: "go to the blog",
    },
    {
        icon: <HiOutlineBookOpen />,
        title: "Educacao",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget volutpat lectus.",
        textButton: "go to the blog",
    },

];

function News() {
    return (
        <ContainerNews>
            <ItemNews>
                <ContainerTitleNews>
                    <StyledIcon>
                        <IoNewspaperOutline />
                    </StyledIcon>
                    <TextTitle>
                        <span>Ultimas noticias</span>
                    </TextTitle>
                </ContainerTitleNews>
                <ContainerDescription>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget volutpat lectus.</span>
                </ContainerDescription>
                
               <Button backgroundColor={"transparent"} border={"1px solid"} text={"go to the blog"} fontWeight={"300"} color={"rgba(229, 9, 20, 1)"} height={"40px"} width={"200px"} marginTop={"20px"}></Button>
            </ItemNews>

        </ContainerNews>
    );
}

export default News;
