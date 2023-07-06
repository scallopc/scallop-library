export type ColumnProps = {
     field?: string;
     header?: string;
     expander?: boolean;
     body?: (data?: any) => React.ReactNode;
     children?: any;
     sortField?: any;
     sortable?: boolean;
     onClick?: () => void;
};

export type TreeNode = {
     id: number;
     name: string;
     children?: any;
     data?: any;
     key?: any;
};

export type TreeTableProps = {
     value: TreeNode[];
     children: any;
     indentLevel?: number;
     paginator?: any;
     rows?: any;
};

export type TableProps = {
     value: Record<string, any>[];
     children?: any;
     paginator?: any;
     rows?: any;
};
