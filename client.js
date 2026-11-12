window.__ModuleLoader__.load({
  id: 'dsh-warm-charcoal-theme',
  factory() {
    const PACKAGE = 'dsh-warm-charcoal-theme';
    const SETTINGS_NS = 'ui-theme';
    const PREFERENCE_FIELD = 'preference';

    // ---- Semantic palette (the user's design tokens) -----------------------
    const LIGHT = {
      page: '#F7F7F2',       // 椤甸潰鑳屾櫙
      sidebar: '#F5F5F0',    // 渚ц竟鏍忚儗鏅?      card: '#FFFFFF',       // 鍐呭鍗＄墖
      input: '#FFFFFF',      // 杈撳叆妗嗚儗鏅?      text: '#252525',       // 涓绘枃瀛?      textSub: '#737373',    // 娆＄骇鏂囧瓧
      border: '#E5E5DF',     // 杈规
      accent: '#397C68',     // 涓诲己璋冭壊
      accentHover: '#2E6857',
      btnText: '#FFFFFF',    // 鎸夐挳鏂囧瓧
      selected: '#E5EEE8',   // 閫変腑鑳屾櫙
      hover: '#ECEDE7',      // Hover 鑳屾櫙
    };
    const DARK = {
      page: '#1E1E1E',
      sidebar: '#262626',
      card: '#303030',
      input: '#262626',
      text: '#E5E5E5',
      textSub: '#A3A3A3',
      border: '#3A3A3A',
      accent: '#78B89E',
      accentHover: '#8FC7B0',
      btnText: '#1E1E1E',
      selected: '#30483D',
      hover: '#333333',
    };

    const p = (light, dark = light) => ({ light, dark });

    // ---- Alias layer overrides --------------------------------------------
    const alias = {
      // Surfaces
      '--dsw-alias-bg-base': p(LIGHT.page, DARK.page),
      '--dsw-alias-bg-layer-1': p(LIGHT.card, DARK.card),
      '--dsw-alias-bg-layer-2': p(LIGHT.card, DARK.card),
      '--dsw-alias-bg-layer-3': p(LIGHT.card, DARK.card),
      '--dsw-alias-bg-overlay': p(LIGHT.card, DARK.card),
      '--dsw-alias-bg-module-platform': p(LIGHT.input, DARK.input),
      '--dsw-alias-bg-multi-select': p(LIGHT.selected, DARK.selected),
      '--dsw-alias-bg-document-preview': p(LIGHT.sidebar, DARK.page),
      '--dsw-alias-bg-document-selection': p('rgba(57,124,104,0.30)', 'rgba(120,184,158,0.28)'),
      '--dsw-alias-bg-skeleton': p('rgba(37,37,37,0.06)', 'rgba(229,229,229,0.08)'),
      '--dsw-alias-bg-mask-1': p('rgba(0,0,0,0.24)', 'rgba(0,0,0,0.50)'),
      '--dsw-alias-bg-mask-2': p('rgba(0,0,0,0.12)', 'rgba(0,0,0,0.20)'),
      '--dsw-alias-bg-mask-3': p('rgba(0,0,0,0.48)', 'rgba(0,0,0,0.48)'),
      '--dsw-alias-bg-mask-photo': p('rgba(0,0,0,0.88)', 'rgba(0,0,0,0.88)'),
      '--dsw-alias-bg-mask-drop': p('rgba(255,255,255,0.70)', 'rgba(38,38,38,0.70)'),

      // Borders
      '--dsw-alias-border-l1': p(LIGHT.border, DARK.border),
      '--dsw-alias-border-l2': p(LIGHT.border, DARK.border),
      '--dsw-alias-border-l2-darkmode-thin': p(LIGHT.border, DARK.border),
      '--dsw-alias-border-l3': p(LIGHT.border, DARK.border),
      '--dsw-alias-border-l4': p(LIGHT.border, DARK.border),
      '--dsw-alias-border-inverted': p('rgba(255,255,255,0.00)', 'rgba(255,255,255,0.06)'),
      '--dsw-alias-border-inverted2': p('rgba(255,255,255,0.00)', 'rgba(255,255,255,0.08)'),

      // Brand / accent
      '--dsw-alias-brand-primary': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-brand-primary-invert': p(LIGHT.btnText, DARK.btnText),
      '--dsw-alias-brand-primary-new-colorprimary-new-color': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-brand-text': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-link': p(LIGHT.accent, DARK.accent),

      // Labels
      '--dsw-alias-label-primary': p(LIGHT.text, DARK.text),
      '--dsw-alias-label-secondary': p(LIGHT.textSub, DARK.textSub),
      '--dsw-alias-label-tertiary': p(LIGHT.textSub, DARK.textSub),
      '--dsw-alias-label-caption': p(LIGHT.textSub, DARK.textSub),
      '--dsw-alias-label-dimmed': p('#B9B9B2', '#4A4A4A'),
      '--dsw-alias-label-primary-dimmed': p(LIGHT.text, DARK.text),
      '--dsw-alias-label-primary-bluish': p(LIGHT.text, DARK.text),
      '--dsw-alias-label-primary-foreground': p(LIGHT.btnText, DARK.btnText),
      '--dsw-alias-label-primary-inverted': p(LIGHT.btnText, DARK.btnText),
      '--dsw-alias-label-document-preview': p(LIGHT.text, DARK.text),
      '--dsw-alias-label-deep-diving': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-label-deep-diving-shimmer': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-label-shimmer': p('rgba(37,37,37,0.30)', 'rgba(229,229,229,0.45)'),
      '--dsw-alias-menu-icon': p(LIGHT.textSub, DARK.textSub),

      // Interactive states
      '--dsw-alias-interactive-bg-hover': p(LIGHT.hover, DARK.hover),
      '--dsw-alias-interactive-bg-hover-solid': p(LIGHT.hover, DARK.hover),
      '--dsw-alias-interactive-bg-hover-accent': p(LIGHT.selected, DARK.selected),
      '--dsw-alias-interactive-bg-active': p(LIGHT.selected, DARK.selected),
      '--dsw-alias-interactive-bg-hover-danger': p('rgba(236,19,19,0.05)', 'rgba(242,90,90,0.15)'),

      // Buttons
      '--dsw-alias-button-primary-fill': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-button-primary-hover': p(LIGHT.accentHover, DARK.accentHover),
      '--dsw-alias-button-primary-dimmed': p(LIGHT.hover, DARK.selected),
      '--dsw-alias-button-contrast-fill': p(LIGHT.text, DARK.text),
      '--dsw-alias-button-info-fill': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-button-info-hover': p(LIGHT.accentHover, DARK.accentHover),
      '--dsw-alias-button-elevated-fill': p(LIGHT.card, DARK.card),
      '--dsw-alias-button-floating-fill': p(LIGHT.card, DARK.input),
      '--dsw-alias-button-floating-hover': p(LIGHT.hover, DARK.card),
      '--dsw-alias-button-ghost-active-fill': p(LIGHT.selected, DARK.selected),
      '--dsw-alias-button-ghost-active-hover': p(LIGHT.hover, DARK.hover),
      '--dsw-alias-button-ghost-active-border': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-button-tool-bar-fill': p('rgba(37,37,37,0.50)', 'rgba(229,229,229,0.20)'),
      '--dsw-alias-button-tool-bar-fill-invisible': p('rgba(37,37,37,0.36)', 'rgba(229,229,229,0.16)'),
      '--dsw-alias-button-tool-bar-hover': p('rgba(37,37,37,0.60)', 'rgba(229,229,229,0.26)'),

      // Illustration
      '--dsw-alias-illustration-background': p(LIGHT.sidebar, DARK.input),
      '--dsw-alias-illustration-surface': p(LIGHT.hover, DARK.card),
      '--dsw-alias-illustration-backing': p('#D8D8D0', '#3A3A3A'),
      '--dsw-alias-illustration-detail': p('#D8D8D0', '#4A4A4A'),
      '--dsw-alias-illustration-inset': p(LIGHT.hover, DARK.card),
      '--dsw-alias-illustration-shadow': p(LIGHT.hover, DARK.card),

      // Markdown / code
      '--dsw-alias-markdown-citation': p(LIGHT.selected, DARK.input),
      '--dsw-alias-markdown-code-block': p('#F5F5F0', '#262626'),
      '--dsw-alias-markdown-code-block-banner': p(LIGHT.sidebar, DARK.input),
      '--dsw-alias-markdown-code-segment-selected': p(LIGHT.card, DARK.card),
      '--dsw-alias-markdown-code-segment-unselected': p(LIGHT.hover, DARK.page),
      '--dsw-alias-markdown-inline-code': p('#F5F5F0', '#333333'),
      '--dsw-alias-markdown-placeholder': p('#B9B9B2', '#4A4A4A'),
      '--dsw-alias-markdown-tag': p(LIGHT.hover, DARK.input),

      // Scrollbar
      '--dsw-alias-scrollbar-bg-l1': p('#D8D8D0', '#4A4A4A'),
      '--dsw-alias-scrollbar-bg-l2': p('#D8D8D0', '#4A4A4A'),
      '--dsw-alias-scrollbar-hover-l1': p('#B9B9B2', '#5A5A5A'),
      '--dsw-alias-scrollbar-hover-l2': p('#B9B9B2', '#5A5A5A'),

      // Semantic states (business maps to accent)
      '--dsw-alias-state-business-primary': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-state-business-tertiary': p(LIGHT.selected, DARK.selected),
      '--dsw-alias-state-idle-primary': p('#D8D8D0', '#4A4A4A'),
      '--dsw-alias-state-success-primary': p('#2F9E44', '#69DB7C'),
      '--dsw-alias-state-success-secondary': p('#4ED17E', '#69DB7C'),
      '--dsw-alias-state-success-tertiary': p('#E6FAED', '#233C2C'),
      '--dsw-alias-state-error-primary': p('#EC1313', '#F25A5A'),
      '--dsw-alias-state-error-secondary': p('#F25A5A', '#F25A5A'),
      '--dsw-alias-state-warn-primary': p('#F59E0B', '#F5AD31'),
      '--dsw-alias-state-warn-secondary': p('#F7AD31', '#F7AD31'),
      '--dsw-alias-state-warn-label': p('#DD8629', '#DD8629'),
      '--dsw-alias-state-warn-tertiary': p('#FEF5E7', '#27241F'),
      '--dsw-alias-state-done-primary': p('#7C3AED', '#A78BFA'),

      // Code/file diff (semantic, kept green/red)
      '--dsw-alias-code-diff-added': p('rgba(34,197,94,0.08)', 'rgba(34,197,94,0.12)'),
      '--dsw-alias-code-diff-deleted': p('rgba(236,19,19,0.08)', 'rgba(242,90,90,0.12)'),
      '--dsw-alias-file-diff-added-bg': p('rgb(230,244,231)', 'rgb(31,49,36)'),
      '--dsw-alias-file-diff-added-gutter': p('rgb(237,247,237)', 'rgb(19,32,22)'),
      '--dsw-alias-file-diff-added-marker': p('rgb(1,162,65)', 'rgb(65,201,119)'),
      '--dsw-alias-file-diff-deleted-bg': p('rgb(252,230,226)', 'rgb(60,31,27)'),
      '--dsw-alias-file-diff-deleted-gutter': p('rgb(253,236,233)', 'rgb(40,19,14)'),
      '--dsw-alias-file-diff-deleted-marker': p('rgb(186,39,35)', 'rgb(250,66,62)'),

      // Switch / toast / tooltip
      '--dsw-alias-switch-thumb': p(LIGHT.card, '#A3A3A3'),
      '--dsw-alias-toast-bg': p('#333333', '#4A4A4A'),
      '--dsw-alias-toast-label': p('#FFFFFF', '#E5E5E5'),
      '--dsw-alias-tooltip-bg': p('#333333', '#4A4A4A'),
      '--dsw-alias-tooltip-key-bg': p('#4A4A4A', '#5A5A5A'),

      // Turn trigger
      '--dsw-alias-turn-trigger-bg': p('#F5F5F0', '#262626'),
      '--dsw-alias-turn-trigger-bg-hover': p(LIGHT.hover, DARK.hover),

      // Specific
      '--dsw-specific-sidebar-fill': p(LIGHT.sidebar, DARK.sidebar),
      '--dsw-specific-sidebar-nav-item-active': p(LIGHT.selected, DARK.selected),
      '--dsw-specific-sidebar-nav-item-active-accent': p(LIGHT.accent, DARK.accent),
      '--dsw-specific-input-major': p(LIGHT.input, DARK.input),
      '--dsw-specific-login-input': p(LIGHT.input, DARK.input),
      '--dsw-specific-bubble': p(LIGHT.sidebar, DARK.input),
      '--dsw-specific-bubble-highlight': p(LIGHT.selected, DARK.selected),
      '--dsw-specific-selector': p(LIGHT.hover, DARK.card),
      '--dsw-specific-tip': p(LIGHT.hover, DARK.card),
      '--dsw-specific-menu': p('rgba(255,255,255,0.70)', 'rgba(38,38,38,0.64)'),
      '--dsw-menu-surface-fill': p('rgba(255,255,255,0.70)', 'rgba(38,38,38,0.64)'),
      '--dsw-alias-menu-group-header-fill': p('rgba(247,247,242,0.94)', 'rgba(38,38,38,0.94)'),

      // Settings cards (base.css)
      '--dsw-alias-settings-card-fill': p(LIGHT.card, DARK.card),
      '--dsw-alias-settings-card-stroke': p(LIGHT.border, DARK.border),

      // Onboarding
      '--dsw-alias-onboarding-accent': p(LIGHT.accent, DARK.accent),
      '--dsw-alias-onboarding-card-fill': p('rgba(255,255,255,0.80)', 'rgba(38,38,38,0.80)'),
      '--dsw-alias-onboarding-secondary-fill': p(LIGHT.card, '#4A4A4A'),
      '--dsw-alias-onboarding-checkbox-border': p(LIGHT.border, DARK.border),

      // Elevation / shadows (neutral, warm-tinted)
      '--dsw-elevation-stroke-color': p(LIGHT.border, DARK.border),
      '--dsw-shadow-lv1': p('0 2px 4px 0 rgba(37,37,37,0.05)', '0 2px 4px 0 rgba(0,0,0,0.30)'),
      '--dsw-shadow-lv1-blur': p('0 4px 12px 0 rgba(37,37,37,0.03)', '0 4px 12px 0 rgba(0,0,0,0.25)'),
      '--dsw-shadow-lv2': p('0 4px 12px 0 rgba(37,37,37,0.04), 0 2px 8px 0 rgba(37,37,37,0.06)', '0 4px 12px 0 rgba(0,0,0,0.35), 0 2px 8px 0 rgba(0,0,0,0.30)'),
      '--dsw-shadow-lv3': p('0 0 1px 0 rgba(37,37,37,0.20), 0 12px 32px 0 rgba(37,37,37,0.12)', '0 0 1px 0 rgba(0,0,0,0.60), 0 12px 32px 0 rgba(0,0,0,0.50)'),
    };

    // ---- Static brand families -> green accent -----------------------------
    // These eliminate the old DeepSeek blue where components read static tokens
    // directly (e.g. the Appearance row icon, document selection, onboarding).
    // The accent is darker green in light (#397C68) and lighter in dark (#78B89E),
    // so the ramp is mode-correct in both schemes.
    const greenLight = {
      50: '#E5EEE8', 100: '#D8E8E0', 200: '#C0D8CC', 300: '#9CC5B4',
      400: '#78B89E', 450: '#5B9177', 500: '#397C68', 600: '#2E6857',
      700: '#245246', 800: '#1D3F37', 900: '#182F2A',
    };
    const greenDark = {
      50: '#30483D', 100: '#2A3F36', 200: '#263A32', 300: '#22342D',
      400: '#78B89E', 450: '#8FC7B0', 500: '#78B89E', 600: '#8FC7B0',
      700: '#4C9A7E', 800: '#3A5A4C', 900: '#2A3F36',
    };
    const brandStatic = {};
    for (const [k, v] of Object.entries(greenLight)) {
      brandStatic[`--dsw-static-deepseek-${k}`] = p(v, greenDark[k]);
    }
    // The blue family is the same accent ramp under a legacy name.
    const blueAliases = {
      '50': '50', '50p': '50', '75': '50', '100': '100', '300': '300',
      '400': '400', '450': '450', '500': '500', '600': '600', '800': '800',
      '900': '900', '950': '900',
    };
    for (const [blue, green] of Object.entries(blueAliases)) {
      brandStatic[`--dsw-static-blue-${blue}`] = p(greenLight[green], greenDark[green]);
    }

    // ---- Warm neutral ramps -------------------------------------------------
    // Several components read the STATIC neutral tokens directly (bypassing the
    // alias layer): the Plan / Deliverables / Schedule / Forge cards use
    // --dsw-static-neutral-50 (light) and -850 (dark) as card fill, the
    // sidebar-right hero uses -200/-700, and the agent-preset + Appearance row
    // use --dsw-static-neutral-bluish-400 as the selected border. We re-tint the
    // whole ramps warm so no cool-gray (#fafafa / #f5f5f5 / #212123) survives.
    const neutralLight = {
      '00': '#FFFFFF', '50': '#FFFFFF', '100': '#ECEDE7', '150': '#E5E5DF',
      '200': '#E5E5DF', '250': '#D8D8D0', '300': '#D8D8D0', '400': '#A9A9A2',
      '500': '#737373', '550': '#5A5A5A', '600': '#4A4A4A', '700': '#3C3C3A',
      '800': '#2B2B2A', '850': '#262626', '900': '#1E1E1E', '1000': '#000000',
    };
    const neutralDark = {
      '00': '#FFFFFF', '50': '#303030', '100': '#333333', '150': '#3A3A3A',
      '200': '#3A3A3A', '250': '#4A4A4A', '300': '#4A4A4A', '400': '#8A8A8A',
      '500': '#A3A3A3', '550': '#A3A3A3', '600': '#8A8A8A', '700': '#4A4A4A',
      '800': '#333333', '850': '#303030', '900': '#1E1E1E', '1000': '#000000',
    };
    const bluishLight = {
      '00': '#FFFFFF', '50': '#FFFFFF', '55': '#F7F7F2', '60': '#F7F7F2',
      '75': '#ECEDE7', '90': '#ECEDE7', '100': '#ECEDE7', '150': '#E5E5DF',
      '200': '#E5E5DF', '300': '#D8D8D0', '310': '#D8D8D0', '400': '#A9A9A2',
      '500': '#737373', '600': '#5A5A5A', '700': '#4A4A4A', '750': '#3C3C3A',
      '800': '#2B2B2A', '850': '#262626', '875': '#262626', '900': '#1E1E1E',
      '950': '#1E1E1E', '1000': '#000000',
    };
    const bluishDark = {
      '00': '#FFFFFF', '50': '#303030', '55': '#262626', '60': '#262626',
      '75': '#333333', '90': '#303030', '100': '#333333', '150': '#3A3A3A',
      '200': '#3A3A3A', '300': '#4A4A4A', '310': '#4A4A4A', '400': '#8A8A8A',
      '500': '#A3A3A3', '600': '#8A8A8A', '700': '#737373', '750': '#4A4A4A',
      '800': '#333333', '850': '#303030', '875': '#303030', '900': '#262626',
      '950': '#1E1E1E', '1000': '#000000',
    };
    const neutralStatic = {};
    for (const [k, v] of Object.entries(neutralLight)) {
      neutralStatic[`--dsw-static-neutral-${k}`] = p(v, neutralDark[k]);
    }
    for (const [k, v] of Object.entries(bluishLight)) {
      neutralStatic[`--dsw-static-neutral-bluish-${k}`] = p(v, bluishDark[k]);
    }

    const tokens = { ...alias, ...brandStatic, ...neutralStatic };

    return {
      inject: ['theme', 'configForms'],
      apply(ctx) {
        // Re-skin the existing light/dark palettes.
        ctx.effect(() => ctx.theme.overrideTokens(PACKAGE, tokens), 'warm-charcoal-theme: palette');

        // Default to light on first visit (no user preference yet); once the user
        // chooses light/dark/system the durable override is remembered normally.
        const form = ctx.configForms.get(SETTINGS_NS);
        const ensureDefaultLight = () => {
          const snap = form.getSnapshot();
          if (snap.status !== 'ready') return;
          const user = snap.user;
          const hasPreference = user != null
            && typeof user === 'object'
            && user[PREFERENCE_FIELD] !== undefined;
          if (!hasPreference) ctx.theme.setTheme('light');
        };
        ensureDefaultLight();
        ctx.effect(() => form.subscribe(ensureDefaultLight), 'warm-charcoal-theme: default light');
      },
    };
  },
});
