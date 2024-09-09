import { defineConfig, mergeConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';
import { resolve } from 'path';
import pkg from './package.json';

const distName = resolve(__dirname, process.env.DIST_NAME || 'dist');

const baseConfig = {
    plugins: [vue(), VitePluginI18n(), VitePluginVersion(), mkcert()],
    define: {
        'process.env': process.env
    },
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    build: {
        copyPublicDir: false,
        target: 'esnext',
        emptyOutDir: false,
        outDir: distName,
        cssMinify: false,
        minify: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'RAMP'
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                assetFileNames: (assetInfo: any) => {
                    return assetInfo.name === 'style.css'
                        ? 'bad.css'
                        : assetInfo.name;
                }
            }
        }
    },
    server: {
        open: '/demos/enhanced-samples.html',
        https: true
    }
} as Record<string, any>;

function cdnBundleConfig() {
    return mergeConfig(baseConfig, {
        build: {
            cssMinify: true,
            lib: {
                fileName: (format: string) => `lib/ramp.browser.${format}.js`,
                formats: ['es', 'iife']
            },
            rollupOptions: {
                output: {
                    assetFileNames: (assetInfo: any) => {
                        return assetInfo.name === 'style.css'
                            ? 'lib/ramp.css'
                            : assetInfo.name;
                    }
                }
            }
        }
    });
}

function prodBundleConfig() {
    return mergeConfig(baseConfig, {
        build: {
            minify: true,
            lib: {
                fileName: (format: string) =>
                    `lib/ramp.browser.${format}.prod.js`,
                formats: ['es', 'iife']
            }
        }
    });
}

function npmBundleConfig() {
    const externalImports = Object.keys(pkg.dependencies).map(
        dep => new RegExp(`^${dep}`)
    );

    const config = mergeConfig(baseConfig, {
        build: {
            lib: {
                fileName: 'lib/ramp.bundle.es',
                formats: ['es']
            },
            rollupOptions: {
                external: externalImports
            }
        }
    });

    return config;
}

function testBuildConfig() {
    delete baseConfig.build.rollupOptions;
    delete baseConfig.build.lib;

    const config = mergeConfig(baseConfig, {
        publicDir: false,
        root: 'demos',
        build: {
            outDir: `${distName}/demos`,
            rollupOptions: {
                input: {
                    main: '/index.html',
                    multi: '/index-multi.html',
                    e2e: '/index-e2e.html',
                    wet: '/index-wet.html',
                    enhancedSamples: '/enhanced-samples.html',
                    enhancedAll: '/enhanced-all.html',
                    samples: '/index-samples.html',
                    all: '/index-all.html',
                    qaSamples: '/qa-samples.html',
                    qaAll: '/qa-all.html',
                    form: '/index-form.html',
                    teleport: '/index-teleport.html',
                    teleportWet: '/index-teleport-wet.html',
                    teleportDetails: '/index-teleport-details.html',
                    multiWet: '/index-multi-wet.html'
                }
            }
        }
    });

    return config;
}

export default defineConfig(viteConfig => {
    const { command, mode } = viteConfig;
    if (command === 'build') {
        if (mode === 'npm') {
            return npmBundleConfig();
        } else if (mode === 'cdn') {
            return cdnBundleConfig();
        } else if (mode === 'prod') {
            return prodBundleConfig();
        } else {
            return testBuildConfig();
        }
    } else {
        return baseConfig;
    }
});
