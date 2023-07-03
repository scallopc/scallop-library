export type ColumnProps = {
     field: string;
     header: string;
     expander?: boolean;
};

export type TreeNode = {
     id: number;
     name: string;
     children?: TreeNode[];
};

export type TreeTableProps = {
     value: TreeNode[];
     children: React.ReactElement<ColumnProps>[];
     indentLevel?: number;
};

export type TableProps = {
     value: Record<string, any>[];
     children: React.ReactElement<ColumnProps>[];
};
