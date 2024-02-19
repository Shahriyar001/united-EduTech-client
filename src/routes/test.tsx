const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "Admin-Dashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CreateFaculty",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CreateStudent",
      },
    ],
  },
];

const newArray = adminPaths.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

console.log(newArray);
