export type ColumnProps = {
     field?: string;
     header?: string;
     expander?: boolean;
     body?: (data?: any) => React.ReactNode;
     children?: any;
};

export type TreeNode = {
     id: number;
     name: string;
     children?: any;
     data?: any;
};

export type TreeTableProps = {
     value: TreeNode[];
     children: any;
     indentLevel?: number;
};

export type TableProps = {
     value: Record<string, any>[];
     children?: any;
};
