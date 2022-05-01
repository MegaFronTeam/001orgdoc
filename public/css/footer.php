<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package orgdoc
 */

?>
<footer class="footer block-with-lazy">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="footer__left-block">
                    <a class="footer__logo" href="/" style="width: 100%;">
                        <img src="/wp-content/themes/orgdoc/img/svg/logo-footer.svg" alt=""/>
                        <span>С-ПРОДЖЕКТ</span>
                    </a>
                    <p>Авторские права на&nbsp;дизайн и&nbsp;всю информацию сайта, а&nbsp;также на&nbsp;подбор и&nbsp;расположение
                        материалов принадлежат С-Проджект</p>
                    <div class="footer__copyright">
                        <span>&copy;&nbsp;&laquo;С-ПРОДЖЕКТ&raquo; 2006-<?php echo date('Y'); ?> </span>
                        <a href="https://orgdoc.ru/karta-sajta">Карта сайта</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'menu-2',
                        'container' => false
                    ));
                    ?>
                    <?php
                    $socials = get_field('socials', 'option');
                    if ($socials):
                        ?>
                        <ul>
                            <li>
                                <div class="soc">
                                    <?php
                                    foreach ($socials as $social) {
                                        ?>
                                        <a class="soc__item soc__item--<?php echo $social['class'];?>"  href="<?php echo $social['link'] ?>" target="_blank">
                                            <svg class="icon icon-instagram ">
                                                <use xlink:href="/wp-content/themes/orgdoc/img/svg/sprite.svg#instagram"></use>
                                            </svg>
                                        </a>
                                        <?php
                                    }
                                    ?>
                                </div>
                            </li>
                        </ul>
                    <?php
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
<div class="d-none">
    <div class="form-wrap modal-win modal-form" id="modal-call">
        <div class="text-center">
            <div class="form-wrap__title h3 ttu strong">
                Обратный звонок
            </div>
            <p>Заполните заявку и&nbsp;мы&nbsp;с&nbsp;Вами свяжемся в&nbsp;течении 15&nbsp;минут</p>
        </div>
        <?php echo do_shortcode('[contact-form-7 id="163" title="Modal"]'); ?>
    </div>

    <div class="form-wrap modal-win modal-win modal-win--lg modal-form" id="modal-call-2">
        <div class="row">
            <div class="col-auto d-none d-sm-block align-self-end">
                <div class="modal-img-wrap"><img class="lazy" src="#"
                                                 data-src="https://xn----7sbaae8ax5amabciw.xn--p1ai/wp-content/uploads/2018/11/gerl.png"
                                                 alt=""/></div>
            </div>
            <div class="col">
                <div class="form-wrap__inner">
                    <div class="h3 text-center">Не нашли, что искали?</div>
                    <div class="text-center text-secondary">Мы Профессионалы. Оставьте телефон, проконсультируем и
                        сориентируем по стоимости за 5 минут!
                    </div>
                    <div class="form-wrap__title text-center h4 strong pb-3">Скидка 10% в день обращения!</div>
                    <?php echo do_shortcode('[contact-form-7 id="163" title="Modal"]'); ?>
                </div>
            </div>
        </div>
    </div>

</div>
<?php wp_footer(); ?>
<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
    (function () {
        var widget_id = '6jxbT7TFPQ';
        var d = document;
        var w = window;

        function l() {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//code.jivosite.com/script/widget/' + widget_id;
            var ss = document.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s, ss);
        }

        if (d.readyState == 'complete') {
            l();
        } else {
            if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
    })();
</script>
<!-- {/literal} END JIVOSITE CODE -->
<?php //echo do_shortcode('[amocrm id="547759" hash="abb4ac63012739fc0c5643026cecc80f" locale="ru"]');?>
<!--<script>!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"547759",hash:"abb4ac63012739fc0c5643026cecc80f",locale:"ru"})}(window,0,"amo_forms_","params","load");</script><script id="amoforms_script_547759" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1625480832"></script>-->
</body>
</html>
