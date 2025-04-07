import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/modules/core/components/Layout';
import HomePage from '@/modules/core/components/HomePage';
import NicheSelection from '@/modules/templates/components/NicheSelection';
import BusinessTemplate from '@/modules/templates/components/BusinessTemplate';
import WebsiteBuilder from '@/modules/websites/components/WebsiteBuilder';
import BrandingTools from '@/modules/branding/components/BrandingTools';
import ClientPipeline from '@/modules/clientPipeline/components/ClientPipeline';
import Resources from '@/modules/core/components/Resources';
import NotFound from '@/modules/core/components/NotFound';
import { ZaptBadge } from '@/shared/components/ZaptBadge';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="niches" element={<NicheSelection />} />
                    <Route path="templates/:nicheId" element={<BusinessTemplate />} />
                    <Route path="website-builder" element={<WebsiteBuilder />} />
                    <Route path="branding" element={<BrandingTools />} />
                    <Route path="client-pipeline" element={<ClientPipeline />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <ZaptBadge />
        </div>
    );
}