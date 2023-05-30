import React, { useContext} from 'react';
import { DiaryContext } from '../../contexts/DiaryContext';  // Asegúrate de usar la ruta correcta a tu archivo de contexto
import StyledComponents from './Sidebar.styled';

const Sidebar: React.FC = () => {  
   const { entries } = useContext(DiaryContext); 
   const { SidebarWrapper, EntryWrapper, EntryIcon } = StyledComponents;
 
   return (
     <SidebarWrapper>
       {entries.map((entry, index) => (
         <EntryWrapper key={index}>
           <EntryIcon src="diary-icon.png" alt="Diary icon" />
           <h2>{entry.title}</h2>
         </EntryWrapper>
       ))}
     </SidebarWrapper>
   );
 };
 
 export default Sidebar;
