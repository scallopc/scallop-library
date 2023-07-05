export const NodesService = {
     getTreeNodesData() {
          return [
               {
                    key: "0",
                    label: "Documents",
                    data: "Documents Folder",
                    icon: "pi pi-fw pi-inbox",
                    children: [
                         {
                              key: "0-0",
                              label: "Work",
                              data: "Work Folder",
                              icon: "pi pi-fw pi-cog",
                              children: [
                                   {
                                        key: "0-0-0",
                                        label: "Expenses.doc",
                                        icon: "pi pi-fw pi-file",
                                        data: "Expenses Document",
                                   },
                                   {
                                        key: "0-0-1",
                                        label: "Resume.doc",
                                        icon: "pi pi-fw pi-file",
                                        data: "Resume Document",
                                   },
                              ],
                         },
                         {
                              key: "0-1",
                              label: "Home",
                              data: "Home Folder",
                              icon: "pi pi-fw pi-home",
                              children: [
                                   {
                                        key: "0-1-0",
                                        label: "Invoices.txt",
                                        icon: "pi pi-fw pi-file",
                                        data: "Invoices for this month",
                                   },
                              ],
                         },
                    ],
               },
               {
                    key: "1",
                    label: "Events",
                    data: "Events Folder",
                    icon: "pi pi-fw pi-calendar",
                    children: [
                         {
                              key: "1-0",
                              label: "Meeting",
                              icon: "pi pi-fw pi-calendar-plus",
                              data: "Meeting",
                         },
                         {
                              key: "1-1",
                              label: "Product Launch",
                              icon: "pi pi-fw pi-calendar-plus",
                              data: "Product Launch",
                         },
                         {
                              key: "1-2",
                              label: "Report Review",
                              icon: "pi pi-fw pi-calendar-plus",
                              data: "Report Review",
                         },
                    ],
               },
               {
                    key: "2",
                    label: "Movies",
                    data: "Movies Folder",
                    icon: "pi pi-fw pi-star-fill",
                    children: [
                         {
                              key: "2-0",
                              icon: "pi pi-fw pi-star-fill",
                              label: "Al Pacino",
                              data: "Pacino Movies",
                              children: [
                                   {
                                        key: "2-0-0",
                                        label: "Scarface",
                                        icon: "pi pi-fw pi-video",
                                        data: "Scarface Movie",
                                   },
                                   {
                                        key: "2-0-1",
                                        label: "Serpico",
                                        icon: "pi pi-fw pi-video",
                                        data: "Serpico Movie",
                                   },
                              ],
                         },
                         {
                              key: "2-1",
                              label: "Robert De Niro",
                              icon: "pi pi-fw pi-star-fill",
                              data: "De Niro Movies",
                              children: [
                                   {
                                        key: "2-1-0",
                                        label: "Goodfellas",
                                        icon: "pi pi-fw pi-video",
                                        data: "Goodfellas Movie",
                                   },
                                   {
                                        key: "2-1-1",
                                        label: "Untouchables",
                                        icon: "pi pi-fw pi-video",
                                        data: "Untouchables Movie",
                                   },
                              ],
                         },
                    ],
               },
          ];
     },

     getTreeTableNodesData() {
          return [
               {
                    key: "0",
                    data: {
                         id: "12fd1gr4t",
                         name: "Applications",
                         size: "100kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "0-0",
                              data: {
                                   name: "React",
                                   size: "25kb",
                                   type: "Folder",
                              },
                              children: [
                                   {
                                        key: "0-0-0",
                                        data: {
                                             name: "react.app",
                                             size: "10kb",
                                             type: "Application",
                                        },
                                   },
                                   {
                                        key: "0-0-1",
                                        data: {
                                             name: "native.app",
                                             size: "10kb",
                                             type: "Application",
                                        },
                                   },
                                   {
                                        key: "0-0-2",
                                        data: {
                                             name: "mobile.app",
                                             size: "5kb",
                                             type: "Application",
                                        },
                                   },
                              ],
                         },
                         {
                              key: "0-1",
                              data: {
                                   name: "editor.app",
                                   size: "25kb",
                                   type: "Application",
                              },
                         },
                         {
                              key: "0-2",
                              data: {
                                   name: "settings.app",
                                   size: "50kb",
                                   type: "Application",
                              },
                         },
                    ],
               },
               {
                    key: "1",
                    data: {
                         id: "12dsrrtr24",
                         name: "Cloud",
                         size: "20kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "1-0",
                              data: {
                                   id: "gf154d2f23ser",
                                   name: "backup-1.zip",
                                   size: "10kb",
                                   type: "Zip",
                              },
                         },
                         {
                              key: "1-1",
                              data: {
                                   id: "45rtdfs2t48s",
                                   name: "backup-2.zip",
                                   size: "10kb",
                                   type: "Zip",
                              },
                         },
                    ],
               },
               {
                    key: "2",
                    data: {
                         id: "15r4tsxd2a",
                         name: "Desktop",
                         size: "150kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "2-0",
                              data: {
                                   id: "5dft4sd2ar",
                                   name: "note-meeting.txt",
                                   size: "50kb",
                                   type: "Text",
                              },
                         },
                         {
                              key: "2-1",
                              data: {
                                   id: "54rwra231fe5",
                                   name: "note-todo.txt",
                                   size: "100kb",
                                   type: "Text",
                              },
                         },
                    ],
               },
               {
                    key: "3",
                    data: {
                         id: "9sdfsr23aweh2j",
                         name: "Documents",
                         size: "75kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "3-0",
                              data: {
                                   id: "9f2gdt12we45",
                                   name: "Work",
                                   size: "55kb",
                                   type: "Folder",
                              },
                              children: [
                                   {
                                        key: "3-0-0",
                                        data: {
                                             id: "3d5fd2ta6w",
                                             name: "Expenses.doc",
                                             size: "30kb",
                                             type: "Document",
                                        },
                                   },
                                   {
                                        key: "3-0-1",
                                        data: {
                                             id: "0dte5w1tgqa5r",
                                             name: "Resume.doc",
                                             size: "25kb",
                                             type: "Resume",
                                        },
                                   },
                              ],
                         },
                         {
                              key: "3-1",
                              data: {
                                   id: "85tfs2ta2g15",
                                   name: "Home",
                                   size: "20kb",
                                   type: "Folder",
                              },
                              children: [
                                   {
                                        key: "3-1-0",
                                        data: {
                                             id: "5et8jhgj1y2",
                                             name: "Invoices",
                                             size: "20kb",
                                             type: "Text",
                                        },
                                   },
                              ],
                         },
                    ],
               },
               {
                    key: "4",
                    data: {
                         id: "9g122edt455a1t",
                         name: "Downloads",
                         size: "25kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "4-0",
                              data: {
                                   id: "21v5ds4f1h2",
                                   name: "Spanish",
                                   size: "10kb",
                                   type: "Folder",
                              },
                              children: [
                                   {
                                        key: "4-0-0",
                                        data: {
                                             id: "81v2dfjh12d",
                                             name: "tutorial-a1.txt",
                                             size: "5kb",
                                             type: "Text",
                                        },
                                   },
                                   {
                                        key: "4-0-1",
                                        data: {
                                             id: "052fdg45sg1",
                                             name: "tutorial-a2.txt",
                                             size: "5kb",
                                             type: "Text",
                                        },
                                   },
                              ],
                         },
                         {
                              key: "4-1",
                              data: {
                                   id: "0g5y5w1gfyr5",
                                   name: "Travel",
                                   size: "15kb",
                                   type: "Text",
                              },
                              children: [
                                   {
                                        key: "4-1-0",
                                        data: {
                                             id: "125f4g5zser1f",
                                             name: "Hotel.pdf",
                                             size: "10kb",
                                             type: "PDF",
                                        },
                                   },
                                   {
                                        key: "4-1-1",
                                        data: {
                                             id: "96fg54er21vd",
                                             name: "Flight.pdf",
                                             size: "5kb",
                                             type: "PDF",
                                        },
                                   },
                              ],
                         },
                    ],
               },
               {
                    key: "5",
                    data: {
                         id: "9c56v2srt12we1",
                         name: "Main",
                         size: "50kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "5-0",
                              data: {
                                   id: "1g54z23d32tr45",
                                   name: "bin",
                                   size: "50kb",
                                   type: "Link",
                              },
                         },
                         {
                              key: "5-1",
                              data: {
                                   id: "05e1h2fj1y5748",
                                   name: "etc",
                                   size: "100kb",
                                   type: "Link",
                              },
                         },
                         {
                              key: "5-2",
                              data: {
                                   id: "122c4g8rey13hb",
                                   name: "var",
                                   size: "100kb",
                                   type: "Link",
                              },
                         },
                    ],
               },
               {
                    key: "6",
                    data: {
                         id: "1d2g5a4t6d4sv2",
                         name: "Other",
                         size: "5kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "6-0",
                              data: {
                                   id: "6d8gdszgb125y7",
                                   name: "todo.txt",
                                   size: "3kb",
                                   type: "Text",
                              },
                         },
                         {
                              key: "6-1",
                              data: {
                                   id: "48cg721xfsr45e",
                                   name: "logo.png",
                                   size: "2kb",
                                   type: "Picture",
                              },
                         },
                    ],
               },
               {
                    key: "7",
                    data: {
                         id: "5df45sd1gf123t5",
                         name: "Pictures",
                         size: "150kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "7-0",
                              data: {
                                   id: "2f2etr6yr",
                                   name: "barcelona.jpg",
                                   size: "90kb",
                                   type: "Picture",
                              },
                         },
                         {
                              key: "7-1",
                              data: {
                                   id: "23d5fg64ry51df",
                                   name: "primeng.png",
                                   size: "30kb",
                                   type: "Picture",
                              },
                         },
                         {
                              key: "7-2",
                              data: {
                                   id: "8fg45da31g32ds45",
                                   name: "prime.jpg",
                                   size: "30kb",
                                   type: "Picture",
                              },
                         },
                    ],
               },
               {
                    key: "8",
                    data: {
                         id: "02d1gre4ys6h2f1",
                         name: "Videos",
                         size: "1500kb",
                         type: "Folder",
                    },
                    children: [
                         {
                              key: "8-0",
                              data: {
                                   id: "02jhjlis41512",
                                   name: "primefaces.mkv",
                                   size: "1000kb",
                                   type: "Video",
                              },
                         },
                         {
                              key: "8-1",
                              data: {
                                   id: "9fg6ryh223dg",
                                   name: "intro.avi",
                                   size: "500kb",
                                   type: "Video",
                              },
                         },
                    ],
               },
          ];
     },

     getTreeTableNodes() {
          return Promise.resolve(this.getTreeTableNodesData());
     },

     getTreeNodes() {
          return Promise.resolve(this.getTreeNodesData());
     },
};
