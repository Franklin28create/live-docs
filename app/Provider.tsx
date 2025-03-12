"use client";

import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <LiveblocksProvider
      //   publicApiKey={
      //     "pk_dev_mU3l-yqE7AyDimn82PuhzDIvX4bgOD6ys7Xz2aIYHOrSThd_x3tzCJMzURSOd6tp"
      //   }
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async({userIds}) => {
        const users = await getClerkUsers({userIds});
        return users;
      }}
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
