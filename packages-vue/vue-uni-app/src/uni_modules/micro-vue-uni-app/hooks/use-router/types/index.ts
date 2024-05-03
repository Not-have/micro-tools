// TODO 需要优化
export type TOptions =
    | ({
      type: "navigateTo";
      delay?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query?: Record<string, any>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params?: Record<string, any>;
    } & Omit<UniNamespace.NavigateToOptions, "events">)
    | ({ type: "navigateBack" } & UniNamespace.NavigateBackOptions)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | { type: "redirectTo" | "reLaunch"; url: string; query?: Record<string, any> }
    | { type: "switchTab"; url: string };

export type TNavigateToParams = {
  urlQuery: string;
  animationType: UniNamespace.NavigateToOptions["animationType"];
  animationDuration: UniNamespace.NavigateToOptions["animationDuration"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any>;
};
