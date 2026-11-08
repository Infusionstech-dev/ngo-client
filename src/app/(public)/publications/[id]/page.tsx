import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicationArticle } from "@/components/publications/PublicationArticle";
import { RelatedPublications } from "@/components/publications/RelatedPublications";
import {
  ALL_PUBLICATIONS,
  findPublicationById,
  publicationPageTitle,
} from "@/constants/publications";

type PublicationDetailProps = PageProps<"/publications/[id]">;

/** Pre-builds one page per known publication id */
export function generateStaticParams() {
  return ALL_PUBLICATIONS.map((publication) => ({ id: String(publication.id) }));
}

export async function generateMetadata({ params }: PublicationDetailProps): Promise<Metadata> {
  const { id } = await params;
  const publication = findPublicationById(Number(id));

  return publication ? { title: publicationPageTitle(publication.title) } : {};
}

/** Reads the id from the URL; must sit inside <Suspense> because Cache Components is enabled */
async function PublicationDetail({ params }: Pick<PublicationDetailProps, "params">) {
  const { id } = await params;
  const publication = findPublicationById(Number(id));

  if (!publication) notFound();

  return (
    <>
      <PublicationArticle publication={publication} />
      <RelatedPublications currentPublicationId={publication.id} />
    </>
  );
}

export default function PublicationDetailPage({ params }: PublicationDetailProps) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PublicationDetail params={params} />
    </Suspense>
  );
}
