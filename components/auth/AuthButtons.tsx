import { Button, HStack } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButtons = () => {
  const data = useSession();
  console.log(data.data);
  return (
    <>
      {data.status === "unauthenticated" && (
        <HStack spacing={2}>
          <Button onClick={() => signIn("spotify")} colorScheme={"green"}>
            Sign in with Spotify
          </Button>
        </HStack>
      )}
      {data.status === "authenticated" && (
        <HStack spacing={2}>
          <Button onClick={() => signOut()} colorScheme={"red"}>
            Sign out
          </Button>
        </HStack>
      )}
    </>
  );
};
export default AuthButtons;
