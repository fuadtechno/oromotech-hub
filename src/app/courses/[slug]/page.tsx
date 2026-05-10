import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseDetailClient from "@/components/CourseDetailClient";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} slug={slug} />;
}
