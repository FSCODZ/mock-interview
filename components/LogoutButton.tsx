"use client";

import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/actions/auth.action";

const LogoutButton = () => {
  return (
    <form action={logoutAction}>
      <Button type="submit" variant="outline">
        Log out
      </Button>
    </form>
  );
};

export default LogoutButton;
