import { Skeleton, SkeletonItem } from "@fluentui/react-components";
import type { SkeletonProps } from "@fluentui/react-components";

export const Loading = (props: Partial<SkeletonProps>) => {
  return (
    <Skeleton {...props}>
    <SkeletonItem />
  </Skeleton>
  )
}
