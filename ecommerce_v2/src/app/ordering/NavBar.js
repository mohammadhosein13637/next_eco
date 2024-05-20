import { useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
const { default: DashboardPage } = require("./(components)/DashboardPage");

const NavBar = () => {
  const routes = [
    {
      slug: "members",
      label: "Organization Members",
      component: <DashboardPage />,
    },
    {
      slug: "drivers-search",
      label: "Driver Pre-Screen",
      component: <DashboardPage />,
    },
  ];

  const router = useRouter();
  currentPath = router.query.route;

  //   const findSlugMatchingCmp = ()=>components.find((cmp =>{
  //         return cmp.slug === currentPath
  //     }
  //   ),

  //   useEffect(()=>{
  //     const foundComponent = findSlugMatchingCmp()
  //   }, [router]),
  const findSlugMatchingCmp = () =>
    components.find((cmp) => {
        return cmp.slug === router.query.route

    });
  useEffect(() => {
    const foundComponent = findSlugMatchingCmp();
    if (currentPath && !foundComponent) {
        router.push('/404')
    }
  }, [router]);

  const cmp = findSlugMatchingCmp().component
  return (
    <div>
      <div>
        <>
        {routes.map(route=>(
            <Link key={""} href={route.slug} >{route.label}</Link>
        ))}
        </>
      </div>
      {cmp}
    </div>
  )
};
