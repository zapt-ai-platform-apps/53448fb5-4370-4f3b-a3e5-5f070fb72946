import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { initializeModules } from '@/modules/index';
import Layout from '@/modules/core/ui/Layout';
import HomePage from '@/modules/core/ui/HomePage';
import NicheSelection from '@/modules/templates/ui/NicheSelection';
import BusinessTemplate from '@/modules/templates/ui/BusinessTemplate';
import WebsiteBuilder from '@/modules/websites/ui/WebsiteBuilder';
import BrandingTools from '@/modules/branding/ui/BrandingTools';
import ClientPipeline from '@/modules/clientPipeline/ui/ClientPipeline';
import Resources from '@/modules/core/ui/Resources';
import NotFound from '@/modules/core/ui/NotFound';
import { ZaptBadge } from '@/shared/components/ZaptBadge';

export default function App() {
    useEffect(() => {
        // Initialize all modules when the app starts
        initializeModules()
            .then(result => {
                console.log('Modules initialization result:', result);
            })
            .catch(error => {
                console.error('Failed to initialize modules:', error);
            });
    }, []);

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