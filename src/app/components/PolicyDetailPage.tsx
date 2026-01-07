import React from 'react';
import { Shield, FileText, Award, Heart } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { CTAButtons } from './CTAButtons';

interface PolicyDetailPageProps {
  policyName: string;
  intro: string;
  whyYouNeedIt: string;
  whatItCovers: string;
  whyShoonya: string;
  peaceOfMind: string;
}

export function PolicyDetailPage({
  policyName,
  intro,
  whyYouNeedIt,
  whatItCovers,
  whyShoonya,
  peaceOfMind,
}: PolicyDetailPageProps) {
  return (
    <div className="min-h-screen bg-white page-transition">
      <Header />

      {/* Policy Intro */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center space-y-4">
          <h1>{policyName}</h1>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* Information Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Why You Need It */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Why You Need It</h3>
            <p className="text-grey-700 leading-relaxed">{whyYouNeedIt}</p>
          </div>

          {/* What It Covers */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">What It Covers</h3>
            <p className="text-grey-700 leading-relaxed">{whatItCovers}</p>
          </div>

          {/* Why Shoonya */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Why Shoonya</h3>
            <p className="text-grey-700 leading-relaxed">{whyShoonya}</p>
          </div>

          {/* Peace of Mind */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-4">Peace of Mind</h3>
            <p className="text-grey-700 leading-relaxed">{peaceOfMind}</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="border-t border-grey-200"></div>
      </div>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center space-y-6">
          <h2>Ready to Get Protected?</h2>
          <p className="text-lg text-grey-600 max-w-3xl mx-auto leading-relaxed">
            Let our experts guide you through the process. We'll take the time to understand 
            your needs and recommend the coverage that's right for you — with no pressure, 
            just honest advice backed by 75 years of experience.
          </p>
          <div className="pt-4">
            <CTAButtons variant="large" className="justify-center" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}