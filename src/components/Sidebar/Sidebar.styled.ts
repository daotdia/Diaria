import styled from 'styled-components';

const SideBarStyles = {
    SidebarWrapper: styled.aside`
      display: flex;
      flex-direction: column;
    `,
    EntryWrapper: styled.div`
      display: flex;
      align-items: center;
    `,
    EntryIcon: styled.img`
      margin-right: 10px;
    `
};
  
  export default SideBarStyles;