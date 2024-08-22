"use client";
import { Button } from "@/components/ui/button";

function BlogOverview() {
  return (
    <div className="min-h-screen flex flex-col gap-10  bg-gradient-to-r from-purple-300 to to-blue-300 p-6">
      <div>
        <Button>Add new Blog</Button>
      </div>
      <div>Blog List Section</div>
    </div>
  );
}

export default BlogOverview;
