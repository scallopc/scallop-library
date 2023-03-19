import styled, { keyframes, css } from "styled-components";

export const Content: any = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
    background: ${(props) => props.theme.default.bgAlternative1};
    width: 100%;
`;

export const H2: any = styled.h2`
    color: inherit;
`;

export const Detail: any = styled.div<any>`
    color: ${(props) => props.theme.default.colorAlternative2};
    font-size: 12px;
    line-height: 2;
    word-spacing: 5px;
`;

export const Link: any = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const SmallDetail: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    font-size: 12px;
`;

export const Container: any = styled.div`
    position: relative;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-x: auto;
    width: 100%;
`;

export const Box: any = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Components: any = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

// DocumentationContainer
export const DocumentationContainer: any = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const H5: any = styled.h5`
    color: ${(props) => props.theme.default.colorAlternative1};
    font-size: 14px;
`;

export const Table: any = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`;

export const TableRow: any = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 0;
    gap: 5px;
    border-bottom: 1px solid ${(props) => props.theme.line.color};
    font-size: 12px;

    &:last-of-type {
        border-bottom: 0;
    }
`;
